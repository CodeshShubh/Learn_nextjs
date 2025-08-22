import { Card } from "@/components/card";

export default function UserRevenue() {
     function randomValue(val:number){
        return Math.floor((Math.random()*val))
     }

     const count = randomValue(2)

     if(count==1){
        throw new Error('this error in root layout')
     }
     
    return (
        <Card>
            <h1>User Revenue</h1>
        </Card>
    );
}