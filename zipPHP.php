<?php

$zip = new ZipArchive();

$zip->open('php.zip', ZipArchive::OVERWRITE + ZipArchive::CREATE);

$files = scandir('./files');

foreach($files as $file) {
  $fileName = "./files/$file";
  if (is_file($fileName)) {
    $content = file_get_contents($fileName);
    $zip->addFromString($fileName, $content);
  }
}
$zip->close();