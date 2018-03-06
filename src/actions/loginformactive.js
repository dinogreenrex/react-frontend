let actionid = 0;
export const isloginformactive = (formactive) => {
    return {
        type: 'LOGINFORM_ACTIVE',
        id: actionid++,
        formactive
    }
}

