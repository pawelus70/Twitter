import Cookies from 'universal-cookie';




function Logout() {
    const cookies = new Cookies();
    // nie działa sprawdzić czemu ....
    cookies.remove('user', {path: '/'});

    return (
        <p>logout</p>
    )
}

export default Logout;