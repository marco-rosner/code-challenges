'use server'

export const checkCode = async (prevState: any, formData: FormData) => {
    const rawFormData = {
        promoCode: formData.get('promocode')
    }

    const CODE = 'BOGOCODE'

    const applied = rawFormData.promoCode === CODE

    const msg = applied
        ? 'Your promocode was successfully applied.'
        : 'The entered code is incorrect.'

    return ({ bool: applied, msg })
}