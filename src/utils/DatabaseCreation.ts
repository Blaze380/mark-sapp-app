import { DBNames, Databases } from '@/constants/Storages';
import { ResultSet, SQLTransactionAsync, openDatabase } from 'expo-sqlite';
import { SQLiteDatabase } from 'expo-sqlite/build/SQLite';

//DEPRECATED por causa de sofrimento e muito AVC
export async function createUserDatabase (): Promise<void> {
    const db: SQLiteDatabase = openDatabase(Databases.USER,);
    db.transactionAsync(async (tx: SQLTransactionAsync): Promise<void> => {
        const userResult: ResultSet = await tx.executeSqlAsync(`CREATE TABLE IF NOT EXISTS ${ DBNames.USER } (
            id TEXT PRIMARY KEY,
            userName  TEXT,
            authToken TEXT  DEFAULT NULL,
            phoneNumber TEXT,
            profilePhoto TEXT,
            biography TEXT
        );`)
        const aa: ResultSet = await tx.executeSqlAsync(`INSERT INTO ${ DBNames.USER } (id,userName) VALUES (1,blazeland);`);

        console.log(aa.insertId)
        console.log(aa.rows)
        console.log(aa.rowsAffected)
        console.log(userResult)
        const permissionsResult: ResultSet = await
            tx.executeSqlAsync(`CREATE TABLE IF NOT EXISTS ${ DBNames.USER_PERMISSIONS }(
                id TEXT PRIMARY KEY,
                canAnyOneSeeMeOnline TEXT,
                canAnyOneSeeMyProfilePhoto TEXT,
                canAnyOneSeeMyBiography TEXT,
                canAnyOneSeeReadMessage TEXT,
                FOREIGN KEY (userId) REFERENCES ${ DBNames.USER }(id)
            );`)
    })

}