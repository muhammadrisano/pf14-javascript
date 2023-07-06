// untuk memasukan array ke arrya lain
// const oldHobies = ['joging', 'swimming', 'reading']

// const newHobies = ['ngoding', 'gaming', ...oldHobies]
// // console.log(newHobies)

// untuk menggabungkan 2 array
const makanFavorit = ['nasi goreng', 'pecel ayam', 'bakso', 'nasi kuning']


const jumlahArrayMakanFavorit = makanFavorit.length
console.log(jumlahArrayMakanFavorit)
// const makanKebiasaan = ['nasi padang', 'lontong']

// const resultMakan = [
//     ...makanFavorit,
//     ...makanKebiasaan
// ]

// console.log(resultMakan)



// mencopy / clone nilai object

// const Budibiodata = {
//     nama: 'budi',
//     email: 'budi@mgail.com',
//     age: 18,
//     jender: 'laki-laki'
// }

// const myBiodata = {...Budibiodata}
// myBiodata.age = 28
// myBiodata.email = 'risano@gmail.com'
// myBiodata.nama = 'risano'

// console.log(myBiodata)
// console.log(Budibiodata)


const biodata =  {
        nama: 'budi',
        email: 'budi@mgail.com',
        age: 18,
        jender: 'laki-laki'
    }
const newBiodata = {
    nama: 'risano',
    alamat: 'padang',
    age: 28,
    hobi: ['ngoding', 'joging']
}

const resultBiodata = {
    ...biodata,
    ...newBiodata,
    isMerried: true
}
// console.log(resultBiodata)