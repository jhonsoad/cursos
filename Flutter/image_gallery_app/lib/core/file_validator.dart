import 'dart:typed_data';

class FileValidator {
  static const int maxFileSize = 2 * 1024 * 1024;
  static const String validextension = '.jpeg';

  static bool isJpeg(String filename) {
    return filename.toLowerCase().endsWith(validextension);
  }

  static bool isFileSizeValid(Uint8List fileBytes) {
    return fileBytes.length <= maxFileSize;
  }

  static bool validateFile(
    Uint8List fileBytes,
    String filename,
  ) {
    if (!isJpeg(filename)) {
      return false;
    }

    if(!isFileSizeValid(fileBytes)) {
      return false;
    }

    return true;
  }
}
