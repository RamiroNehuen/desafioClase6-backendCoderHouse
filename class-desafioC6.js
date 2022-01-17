const fs = require('fs');

module.exports = class Container {
    constructor (fileName){
        this.fileName = fileName;
        this.productSave =[]
    };

   generateNewId(){
        let idIndex = Math.floor(Math.random() * 9999) +1;
        if (Object.keys(this.productSave).includes(idIndex) == idIndex) {
            idIndex = generateNewId();
        };
        return idIndex;
    }

    createFile(){
        const productsText = JSON.stringify(this.productSave)
        try { fs.promises.writeFile(`./${this.fileName}`, productsText)
            }
        catch (err) {
            console.log('No se pudo crear el archivo!')
        }
    };
    
    save(item){
        fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        .then(content => {
            this.productSave = JSON.parse(content);
            this.productSave.push(item);
            item.id = this.generateNewId();
            const productsText = JSON.stringify(this.productSave);
            try { fs.promises.writeFile(`./${this.fileName}`, productsText)
            }
            catch (err) {
                console.log('No se pudo escribir el archivo!')
            }
        })
        .catch(err => {console.log('Error de Lectura', err)})
    };

    getById(givenId){
        fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        .then(content => {
            this.productSave = JSON.parse(content);
            const productById = this.productSave.find(product => product.id === givenId)
            console.log(productById)
        })
        .catch(err => {console.log('Error de Lectura', err)})

        
    };

    getRandomItem(){
        const randomItem = Math.floor(Math.random() * this.productSave.length);
        return randomItem
    }

    getAll(){
        fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        .then(content => {
            this.productSave = JSON.parse(content);
            return this.productSave;
        })
        .catch(err => {console.log('Error de Lectura', err)})
    };

    deleteById(givenId){
        
        fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        .then(content => {
            this.productSave = JSON.parse(content);
            this.productSave = this.productSave.filter(product => product.id != givenId);
            console.log(this.productSave);
            
            const productsText = JSON.stringify(this.productSave);

            try { fs.promises.writeFile(`./${this.fileName}`, productsText)
            }
            catch (err) {
                console.log('No se pudo escribir el archivo!')
            }
        })
        .catch(err => {console.log('Error de Lectura', err)})

    };

    deleteAll(){
        fs.promises.readFile(`./${this.fileName}`, 'utf-8')
        .then(content => {
            this.productSave = JSON.parse(content);
            this.productSave = [];
            console.log(this.productSave);
            
            const productsText = JSON.stringify(this.productSave);

            try { fs.promises.writeFile(`./${this.fileName}`, productsText)
            }
            catch (err) {
                console.log('No se pudo escribir el archivo!')
            }
        })
        .catch(err => {console.log('Error de Lectura', err)})
    };
}