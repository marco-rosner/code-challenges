'use server'

export const checkCode = async (prevState: any, formData: FormData) => {
    const rawFormData = {
        promoCode: formData.get('promocode')
    }

    const CODE = 'BOGOCODE'

    const codeStatus = rawFormData.promoCode === CODE

    const msg = codeStatus
        ? 'Your promocode was successfully applied.'
        : 'The entered code is incorrect.'

    return ({ codeStatus, msg })
}