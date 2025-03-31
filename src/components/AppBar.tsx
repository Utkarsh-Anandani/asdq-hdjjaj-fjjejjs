import ListIcon from "../common/ListIcon";

function AppBar() {
    const handleExampleOpen = () => {
        const element = document.querySelector(".left");
        if(element) {
            element.classList.remove("left-close");
        }
    }
    return(
        <div className="appbar">
            {window.innerWidth < 700 && <div onClick={handleExampleOpen}><ListIcon /></div>}
            <div>SQL Editor</div>
        </div>
    );
}

export default AppBar;