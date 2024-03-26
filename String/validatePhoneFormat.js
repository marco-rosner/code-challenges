const validatePhoneFormat = (phone) => {
    const validPhoneFormat = /\d{2}-\d{5}-\d{4}/
    let phoneAreaCode, phoneFirstNumbers, phoneSecondNumbers

    if (validPhoneFormat.test(phone)) {
        phoneAreaCode = phone.slice(0, 2)
        phoneFirstNumbers = phone.slice(3, 8)
        phoneSecondNumbers = phone.slice(9, 13)
    }

    return `${phoneAreaCode} ${phoneFirstNumbers} ${phoneSecondNumbers}`
}

console.log(validatePhoneFormat('11-92312-3212'))