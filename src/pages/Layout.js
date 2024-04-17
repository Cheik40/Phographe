import { Outlet, Link } from "react-router-dom";

function Layout() {
    const listProject = [
        { label: "" },
        { name: "projet" },
        { projet1: "projet1" },
        { projet2: "projet2" },
        { projet3: "projet3" },
    ];

    const handlChangeProject = (e) => {
        e.preventDefault();
        let target = "/" + e.value;
        console.log("e.value" + e.value);
        //   return <Link to={target}>{target}</Link>;
        return <Link to={target}>{e.value}</Link>;
    };

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li>
                        {listProject[0].label}
                        <select name={listProject[1].name}>
                            <option
                                value={listProject[2].projet1}
                                onChange={handlChangeProject}
                            >
                                {listProject[2].projet1}
                                {/* <Link to='/project1'>
                                    {listProject[2].projet1}
                                </Link> */}
                            </option>
                            <option
                                value={listProject[3].projet2}
                                onChange={handlChangeProject}
                            >
                                {listProject[3].projet2}
                                {/* <Link to='/project2'>
                                    {listProject[3].projet2}
                                </Link> */}
                            </option>
                            <option
                                value={listProject[4].projet3}
                                onChange={handlChangeProject}
                            >
                                {listProject[4].projet3}
                                {/* <Link to='/project3'>
                                    {listProject[4].projet3}
                                </Link> */}
                            </option>
                        </select>
                    </li>
                    <li>
                        <Link to='/commission'>Commission</Link>
                    </li>
                    <li>
                        <Link to='/journal'>Journal</Link>
                    </li>
                    <li>
                        <Link to='/scenographie'>Scenographie</Link>
                    </li>
                    <li>
                        <Link to='/about'>A propos</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contacts</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default Layout;
