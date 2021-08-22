import fs from 'fs';
import path from 'path';
import uploadConfig from '@config/upload';

class DiskStorageProvider implements IStorageProvider {
  public async saveFile(fileName: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, fileName),
      path.resolve(uploadConfig.uploadFolder, fileName),
    );

    const file_url = `http://localhost:${process.env.PORT}/files/${fileName}`;

    return file_url;
  }

  public async deleteFile(fileName: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadFolder, fileName);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

export default DiskStorageProvider;
