
<?php
$data = json_decode(file_get_contents("php://input"), true);
if (isset($data['image'])) {
    $image = $data['image'];
    $image = str_replace('data:image/png;base64,', '', $image);
    $image = str_replace(' ', '+', $image);
    $imageData = base64_decode($image);
    $fileName = 'uploads/photo_' . time() . '.png';
    file_put_contents($fileName, $imageData);
}
?>
