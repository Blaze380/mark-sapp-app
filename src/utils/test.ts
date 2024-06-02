import * as SQLite from 'expo-sqlite';

export async function testDatabase () {
    console.log("feijão.")
    return;
    const db = SQLite.openDatabase("database_test");
    db.transactionAsync(async (tx): Promise<void> => {
        await tx.executeSqlAsync("CREATE TABLE IF NOT EXISTS blaze (nome TEXT, age INTEGER);");
        await tx.executeSqlAsync(`INSERT INTO blaze (nome,age) VALUES ("gomas",15);`)
        await tx.executeSqlAsync(`INSERT INTO blaze (nome,age) VALUES ("sergia",16);`)
        await tx.executeSqlAsync(`INSERT INTO blaze (nome,age) VALUES ("bebeeeee",15);`)
        const results = await tx.executeSqlAsync("SELECT * FROM blaze")
        console.log(db)
        console.log(results.rows);
    })
}