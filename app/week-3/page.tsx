import ItemList from "./item-list";


export default function Page() {

    const parent = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
    } as const;


    return ( 
        <div style={parent}>
            <h1 className="mb-4 text-2xl font-bold">Week 3 - Shopping List Items<br /></h1>
            <ItemList/>
        </div>
    );

}
