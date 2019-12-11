const googleClientId = '78141990970-36ti40l3acjl42hj9f38uh24ea22l87k.apps.googleusercontent.com'

if (typeof gapi === 'object' && gapi.load) {

    gapi.load('client', () => {
        gapi.client.init({
            apiKey: 'AIzaSyB25HhssxCwuGBasIR-E8Ghh-SSY2SrqhY',
            clientId: googleClientId,
            scope: 'profile'
        }).
        then(() => {
            const auth = gapi.auth2.getAuthInstance()
            auth.isSignedIn.listen(() => {
                const user = auth.currentUser.get()
                console.log()        
            })

            const isSignedIn = auth.isSignedIn.get()
            if (!isSignedIn) {
                auth.signIn()
            } else {
                const user = auth.currentUser.get()
                console.log(user) 
            }
        })
    })
} 