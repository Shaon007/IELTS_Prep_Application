param([string]$imagePath)

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Media.Ocr.OcrEngine, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime]
$null = [Windows.Storage.StorageFile, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime]
$null = [Windows.Globalization.Language, Windows.Foundation.UniversalApiContract, ContentType = WindowsRuntime]

$fullPath = (Resolve-Path $imagePath).Path
$asTask = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]

$fileOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($fullPath)
$file = $asTask.MakeGenericMethod([Windows.Storage.StorageFile]).Invoke($null, @($fileOp)).Result

$streamOp = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
$stream = $asTask.MakeGenericMethod([Windows.Storage.Streams.IRandomAccessStream]).Invoke($null, @($streamOp)).Result

$decoderOp = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
$decoder = $asTask.MakeGenericMethod([Windows.Graphics.Imaging.BitmapDecoder]).Invoke($null, @($decoderOp)).Result

$bitmapOp = $decoder.GetSoftwareBitmapAsync()
$bitmap = $asTask.MakeGenericMethod([Windows.Graphics.Imaging.SoftwareBitmap]).Invoke($null, @($bitmapOp)).Result

$lang = [Windows.Globalization.Language]::new('en-US')
$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($lang)
$ocrOp = $engine.RecognizeAsync($bitmap)
$ocrResult = $asTask.MakeGenericMethod([Windows.Media.Ocr.OcrResult]).Invoke($null, @($ocrOp)).Result

Write-Output $ocrResult.Text
