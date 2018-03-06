let actionid = 0;
export const hidemaincontent = (navMenuActive = 0 ) => {
    return {
        type: 'MAIN_CONTENT_HIDDEN',
        navMenuActive
    }
}

