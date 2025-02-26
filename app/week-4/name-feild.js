export default function NameField() {

    const [name, setname] = useState("");

    

    return (
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Item name"/>
        </div>
    );
}