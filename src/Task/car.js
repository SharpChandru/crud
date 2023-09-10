function Car(props){

const {carInfo}=props;
const {brand,color}=carInfo;


    const text=`hi i am a ${color} ${brand} car`
    return (
        <>
        <h1>{text}</h1>
        
        </>
    )
}
export default Car;