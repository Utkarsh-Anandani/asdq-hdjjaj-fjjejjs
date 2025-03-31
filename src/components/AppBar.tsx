import ListIcon from "../common/ListIcon";

function AppBar() {
    const handleExampleOpen = () => {
        const element = document.querySelector(".left");
        if(element) {
            element.classList.add("left-open");
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