

// IPA
// IPS
const IPA = 80
const IPS = 70

// nilai IPA saya adalah 80
// dan nilai IPS saya adalah 70
// dan rata-rata dari kedua nilai adalah 75

// concate
// const text = 'nilai IPA Saya adalah '+IPA + '\n' + 'dan nilai IPS saya adalah '+IPS+ '\n'+ 'dan rata-rata dari kedua nilai adalah ' + ((IPA + IPS) / 2)
// console.log(text)


// template literal
const text = `nilai IPA saya adalah ${IPA}
dan nilai IPS saya adalah ${IPS}
dan rata-rata dari kedua nilai adalah ${(IPA + IPS)/2 }`
console.log(text)
