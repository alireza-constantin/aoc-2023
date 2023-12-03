mod day_01;

fn main(){
     if let Err(err) = day_01::day_01() {
        eprintln!("Error: {}", err);
    }
}