// Arrays
let pronoun = ['the', 'our', 'your', 'my'];
let adj = ['small', 'big', 'great', 'original']
let noun = ['racoon', 'dog', 'kangaroo', 'gangster']
let domain = ['.com', '.es', '.net', '.io']

// .map
let domaingenerated = pronoun.flatMap(p =>
    adj.flatMap(a =>
        noun.flatMap(n =>
            domain.flatMap(d => {
                return p + a + n + d
            }
            )
        )
    )
)
console.log(domaingenerated);
