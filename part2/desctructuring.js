// untuk object
// const biodata =  {
//     nama: 'budi',
//     email: 'budi@mgail.com',
//     age: 18,
//     jender: 'laki-laki',
//     alamat: {
//         lokasi: 'jl. testing aja',
//         kecamatan: 'jati',
//         kelurahan: 'padang timur',
//         kota: 'padang',
//         negara: 'indonesia'
//     }
// }

// const {lokasi, kota} = biodata.alamat
// console.log(lokasi)
// console.log(kota)

// tidak menggunakan destructuring

// const nama = biodata.nama
// const age = biodata.age
// const email = biodata.email
// const jender = biodata.jender

// const {nama : name, age, email, jender} = biodata

// console.log(name)
// console.log(age)
// console.log(email)
// console.log(jender)


// array
const rgb = [255, 189, 50]

// tidak menggukan destructuring
// const red = rgb[0]
// const green = rgb[1]
// const blue = rgb[2]

// menggunakan destructuring
const [merah, _, blue] = rgb

console.log(merah)
// console.log(green)
console.log(blue)
