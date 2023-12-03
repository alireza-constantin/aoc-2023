use anyhow::Result;
use regex::Regex;
use std::fs;

fn convert_string_to_number(s: &str) -> Option<u32> {
    match s.to_lowercase().as_str() {
        "zero" => Some(0),
        "one" => Some(1),
        "two" => Some(2),
        "three" => Some(3),
        "four" => Some(4),
        "five" => Some(5),
        "six" => Some(6),
        "seven" => Some(7),
        "eight" => Some(8),
        "nine" => Some(9),
        _ => None,
    }
}

pub fn day_01() -> Result<()> {
    let re =
        Regex::new(r#"(?i)(?:one|two|three|four|five|six|seven|eight|nine|1|2|3|4|5|6|7|8|9)"#)
            .unwrap();
    let file = fs::read_to_string("./src/day01/test.txt")?;
    println!("{:?}", file);
    for line in file.lines() {
        let tes: Vec<_> = re.find_iter(line).map(|x| x.as_str()).collect();

        let first: &str = tes.first().unwrap();
        let last: &str = tes.last().unwrap();
        let left = convert_string_to_number(first).unwrap();
        let right = convert_string_to_number(last).unwrap();

        let conc = format!("{}{}", first, last);
        let conc2 = format!("{}{}", left, right);
        //println!("{}", conc);
        //println!("{}", conc2);
    }

    Ok(())
}

