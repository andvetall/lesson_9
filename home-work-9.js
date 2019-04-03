// 1 (3 points)
function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;`

    Array.from(message).forEach(function(leter, velocity){
        setTimeout(
            () => container.innerText += leter, 1000 * velocity)
    })

}

typeMessage ( `Welcome to the hell`, 1 )

// 2 (4 points)
var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })

        return {
            setUserPresent ( userName, present ) {
                let user = users.find(
                    item => item.name === userName
                )
                user ? user.present = present : null
            },
            showPresent () {
                console.log(
                    users.filter(
                        item => item.present
                    )
                )

            },
            showAbsent () {
                console.log(
                    users.filter(
                        item => !item.present
                    )
                )
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )


// 3 (5 points)

let changeClass = ( classname, styleString ) =>
    Array.from(document.styleSheets).filter(
        sheet => !sheet.href
    ).forEach(
        sheet =>
            Array.from(sheet.cssRules)
                .filter(
                    rule => rule.selectorText === classname
                ).forEach(
                rule => rule.style[styleString.split(':')[0]] =   styleString.split(':')[1]
            )
    )
changeClass ( "paper-button", "opacity:0" )