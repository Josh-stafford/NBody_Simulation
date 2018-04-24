class World {

    constructor(bodies = [], ts, e=0.1){

        this.bodies = bodies;
        this.nextBodies = bodies;
        this.timestep = ts;
        this.epsilon = e;


    }

    update(){

        for(var i = 0; i < this.bodies.length; i++){

            this.nextBodies[i].pos = Vector2.add(Vector2.multiply(this.bodies[i].vel, this.timestep), this.bodies[i].pos);

            let totalVel = new Vector2(0, 0);

            for(var j = 0; j < this.bodies.length; j++){

                if(i != j){

                    let deltaVec = Vector2.subtract(this.bodies[j].pos, this.bodies[i].pos);

                    let mag = Vector2.mag(deltaVec);

                    let toAdd = Vector2.divide(deltaVec, mag*mag*mag*this.bodies[i].mass+this.epsilon*this.epsilon);

                    totalVel = Vector2.add(totalVel, toAdd);

                }

            }

            this.nextBodies[i].vel = Vector2.add(this.bodies[i].vel, Vector2.multiply(totalVel, this.timestep));


        }

        let temp = this.bodies;
        this.bodies = this.nextBodies;
        this.nextBodies = temp;

    }

}