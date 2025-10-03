export const checkValidatedata = (email, password) => {
    const isEmailId = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

    const isPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)

    if (!isEmailId) return "Email id is not valid"
    
    if (!isPassword) return "Password is not valid"
    
    return null;
}