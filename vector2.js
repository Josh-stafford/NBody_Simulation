class Vector2 {

    constructor(x, y) {
      this.y = y;
      this.x = x;
    }

    static add(v1, v2){

        return new Vector2(v1.x + v2.x, v1.y + v2.y);

    }

    static subtract(v1, v2){

        return new Vector2(v1.x - v2.x, v1.y - v2.y);

    }

    static multiply(v1, val){

        return new Vector2(v1.x * val, v1.y * val);

    }

    static divide(v1, val){

        return new Vector2(v1.x / val, v1.y / val);

    }

    static mag(v1){
        return Math.sqrt(v1.x*v1.x + v1.y*v1.y);
    }

  }