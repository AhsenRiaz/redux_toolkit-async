
import { Server } from "miragejs";

export function makeServer({ environment = " test "} = {}) {

        
        let server  = new Server({
            environment,
            routes(){
                this.namespace  = "api";
                this.get("updatedCounter" , () => {
                    return 30;
                } , {
                    timing : 1000
                })
            }

        })

}