interface BodyProps {
    message: string;
}

export default function Body({message}: BodyProps){
    return(
        <>
            <p>{message}</p>
        </>
    )
}

