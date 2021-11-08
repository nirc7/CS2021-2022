
export default function FCChild(props) {

    const btnTellPapa = () => { 
        props.send2Papa(7);
    }

    return (
        <div>
            Child <br />
            <button onClick={btnTellPapa}>tell papa</button>
        </div>);
}