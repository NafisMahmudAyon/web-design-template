Add-Type -AssemblyName System.Drawing
$imagePath = "G:\React Projects\web-design-template\template-76\design sections\Full Page.png"
$img = [System.Drawing.Bitmap]::FromFile($imagePath)
$outDir = "G:\React Projects\web-design-template\template-76\public\assets"

# Find horizontal bounds around Y=700..900
$minX = 1800; $maxX = 0
for ($y = 400; $y -le 1060; $y += 5) {
    for ($x = 750; $x -le 1650; $x += 5) {
        $c = $img.GetPixel($x, $y)
        # Background of card is around R=30, G=29, B=34
        if ([Math]::Abs($c.R - 30) -gt 25 -or [Math]::Abs($c.G - 29) -gt 25 -or [Math]::Abs($c.B - 34) -gt 25) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
        }
    }
}

Write-Output "Hero Man Horizontal: X=[$minX, $maxX], W=$($maxX - $minX + 1)"

# Add padding
$pad = 10
$cx = [Math]::Max(0, $minX - $pad)
$cy = 380
$cw = [Math]::Min($img.Width - $cx, ($maxX - $minX + 1) + ($pad * 2))
$ch = 1080 - $cy

$rect = New-Object System.Drawing.Rectangle($cx, $cy, $cw, $ch)
$crop = $img.Clone($rect, $img.PixelFormat)
$crop.Save((Join-Path $outDir "hero-portrait.png"), [System.Drawing.Imaging.ImageFormat]::Png)
$crop.Dispose()
$img.Dispose()
Write-Output "Hero portrait saved!"
