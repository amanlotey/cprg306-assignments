export default function Item({ name, quantity, category }) {
    return (
        <>
            <ul className="bg-gray-700 mx-3 my-2 p-2 text-lg w-96" >
                <li className="font-bold">
                    {`${name}, ${quantity}`}
                </li>
               <li>
                    {`Buy 1 in ${category}`}
               </li>
            </ul>
        </>
    );
}