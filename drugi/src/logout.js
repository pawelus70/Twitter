import Cookies from 'universal-cookie';




function Logout() {
    const cookies = new Cookies();
    // nie działa sprawdzić czemu ....
    cookies.set('user',null, {path: '/'});

    return (
        <p>logout</p>
    )
}

export default Logout;