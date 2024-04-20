import * as FileSystem from 'expo-file-system';
export enum FilesDirectory {
    APP_ROOT = "Android/media/com.infinity/MarksApp",
    DATABASES = "/databases",
    BACKUPS = '/backups',
    MEDIA = '/media'
}
export enum MediaDirectory {
    IMAGES = '/MarksApp Images',
    PROFILE_PHOTOS = '/MarksApp Photos',
    VIDEOS = '/MarksApp Videos',
    AUDIOS = '/MarksApp Audios',
    DOCUMENTS = '/MarksApp Documents'
}

export async function createAppDirectory (): Promise<void> {
    createRootDir();
    createMediaDir();
}

function createRootDir (): void {
    const rootDir: string = FileSystem.documentDirectory + FilesDirectory.APP_ROOT;

    Object.values(FilesDirectory).forEach(async (directory: FilesDirectory): Promise<void> => {
        if (directory !== FilesDirectory.APP_ROOT) {
            await FileSystem.makeDirectoryAsync(rootDir + directory, { intermediates: true, })
        }

    })
}
function createMediaDir (): void {
    const mediaDir: string = FileSystem.documentDirectory + FilesDirectory.APP_ROOT + FilesDirectory.MEDIA;
    Object.values(MediaDirectory).forEach(async (dir: MediaDirectory): Promise<void> => {
        await FileSystem.makeDirectoryAsync(mediaDir + dir, { intermediates: true, })
    })
}