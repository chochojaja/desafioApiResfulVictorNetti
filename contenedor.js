
const fs = require('fs');

class contenedor {
    constructor(canal){
        this.canal = canal
    }

    async #readFileFunction(canal){
        let archivo = await fs.promises.readFile(canal,'utf-8')
        let archivoParse = await JSON.parse(archivo)
        return archivoParse
    }

    async save(obj){
        try {
            let dataArchivo = await this.#readFileFunction(this.canal, 'utf-8')
            if (dataArchivo.length) {
                await fs.promises.writeFile(this.canal, JSON.stringify([...dataArchivo,{ ...obj, id:dataArchivo[dataArchivoparse.length]}]))
                
            } else {
                await fs.promises.writeFile(this.canal, JSON.stringify([{...obj, id:1}],null,2))
            } 
            console.log(`El archivo tiene el numero id:${dataArchivo[dataArchivo.length - 1].id + 1 }`) 

        } catch (error) { console.log(error)            
        }  
        
    }


async updateById(obj){
    try {
        let dataArch = await this.#readFileFunction(this.canal)
        const objetoIndex = dataArch.findIndex(prod =>prod.id === obj.id)
        if (objetoIndex !== -1) {
            dataArch[objetoIndex] = obj
            await fs.promises.writeFile(this.canal, JSON.stringify(dataArch, null, 2))
                return {mensaje: 'producto actualizado con id'}
        } else {
            return {error: 'no existe ningun producto'}
        }
    } catch (error) { console.log(error)
        
    }

 }

 async getAll(){ 
    try {
        let data = await fs.promises.readFile(this.canal, 'utf-8')
        let dataParse = JSON.parse(data)
        
        if (dataParse.length) {
            console.log(dataParse)
        } else{
            console.log('no se encontro el producto')
        }

    } catch (error) {
        console.log(error)
    }
    
 }
/*
 async deleteAll(id){
     try {
        let data = await fs.promises.readFile(this.canal, 'utf-8')
        let dataParse = JSON.parse(data)
        let producto = dataParse.find(producto => producto.id !== id)
        if (producto) {
            let dataFiltrado = dataParse.filter(producto =>producto.id !== id)
            await fs.promises.writeFile(this.canal,JSON.stringify(dataFiltrado,null,2))
            console.log('producto eliminado')
        } else {
            console.log('no se encontro el producto')
            
        }

     } catch (error) { 
        console.log(error)
        
     }   
        
 }
*/
} 
module.exports = contenedor