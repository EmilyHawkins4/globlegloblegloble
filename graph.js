var countryGraph = [[1], [0, 2], [1, 3, 4], [2, 4, 5, 6], [2, 3], [3, 6], [3, 5, 7], [6, 8], [7, 9], [8, 23], [11, 12], [10, 12, 14], [10, 11, 13, 14], [12], [11, 12], [17, 21, 18], [22], [15, 21, 19], [22, 15], [17, 21], [19, 24], [19, 17, 15], [16], [9, 26, 24, 27, 31], [20, 23, 27, 29], [28, 32, 34, 27, 33], [23, 31], [30, 29, 24, 23, 31, 32, 34, 25, 33], [31, 32, 25], [24, 27, 30], [29, 27], [23, 26, 27, 32, 28], [31, 27, 34, 25, 28], [25, 27], [25, 27, 32]]

let countryMap = new Map([["canada", 0], ["united states", 1], ["mexico", 2], ["guatemala", 3], ["belize", 4], ["el salvador", 5], ["honduras", 6], ["nicaragua", 7], ["costa rica", 8], ["panama", 9], ["bahamas", 10], ["cuba", 11], ["haiti", 12], ["dominican republic", 13], ["jamaica", 14], ["st lucia", 15], ["st kitts and nevis", 16], ["st vincent", 17], ["dominica", 18], ["grenada", 19], ["trinidad and tobago", 20], ["barbados", 21], ["antigua and barbuda", 22], ["colombia", 23], ["venezuela", 24], ["argentina", 25], ["ecuador", 26], ["brazil", 27], ["chile", 28], ["guyana", 29], ["suriname", 30], ["peru", 31], ["bolivia", 32], ["uruguay", 33], ["paraguay", 34], ["iceland", 35], ["norway", 36], ["sweden", 37], ["finland", 38], ["denmark", 39], ["czechia", 40], ["romania", 41], ["ukraine", 42], ["belarus", 43], ["bulgaria", 44], ["moldova", 45], ["croatia", 46], ["north macedonia", 47], ["bosnia and herzegovina", 48], ["luxembourg", 49], ["liechtenstein", 50], ["albania", 51], ["serbia", 52], ["kosovo", 53], ["san marino", 54], ["andorra", 55], ["united kingdom", 56], ["estonia", 57], ["latvia", 58], ["lithuania", 59], ["spain", 60], ["france", 61], ["portugal", 62], ["netherlands", 63], ["belgium", 64], ["switzerland", 65], ["hungary", 66], ["germany", 67], ["austria", 68], ["poland", 69], ["turkey", 70], ["vatican", 71], ["italy", 72], ["montenegro", 73], ["monaco", 74], ["greece", 75], ["malta", 76], ["cyprus", 77], ["slovakia", 78], ["slovenia", 79], ["ireland", 80], ["timor leste", 81], ["malaysia", 82], ["indonesia", 83], ["brunei", 84], ["singapore", 85], ["philippines", 86], ["taiwan", 87], ["china", 88], ["russia", 89], ["mongolia", 90], ["bhutan", 91], ["india", 92], ["sri lanka", 93], ["bangladesh", 94], ["pakistan", 95], ["afghanistan", 96], ["uzbekistan", 97], ["tajikistan", 98], ["turkmenistan", 99], ["kyrgyzstan", 100], ["kazakhstan", 101], ["azerbaijan", 102], ["armenia", 103], ["georgia", 104], ["jordan", 105], ["syria", 106], ["kuwait", 107], ["qatar", 108], ["united arab emirates", 109], ["yemen", 110], ["oman", 111], ["saudi arabia", 112], ["iraq", 113], ["nepal", 114], ["iran", 115], ["israel", 116], ["maldives", 117], ["lebanon", 118], ["palestine", 119], ["north korea", 120], ["south korea", 121], ["japan", 122], ["vietnam", 123], ["bahrain", 124], ["thailand", 125], ["cambodia", 126], ["myanmar", 127], ["laos", 128], ["djibouti", 129], ["eritrea", 130], ["egypt", 131], ["chad", 132], ["sudan", 133], ["south sudan", 134], ["mozambique", 135], ["malawi", 136], ["somalia", 137], ["senegal", 138], ["ghana", 139], ["guinea", 140], ["guinea bissau", 141], ["burkina faso", 142], ["democratic republic of the congo", 143], ["republic of the congo", 144], ["central african republic", 145], ["uganda", 146], ["rwanda", 147], ["burundi", 148], ["tanzania", 149], ["kenya", 150], ["zambia", 151], ["zimbabwe", 152], ["south africa", 153], ["eswatini", 154], ["lesotho", 155], ["namibia", 156], ["botswana", 157], ["ivory coast", 158], ["angola", 159], ["seychelles", 160], ["sierra leone", 161], ["morocco", 162], ["algeria", 163], ["libya", 164], ["tunisia", 165], ["sao tome and principe", 166], ["mali", 167], ["nigeria", 168], ["niger", 169], ["mauritania", 170], ["comoros", 171], ["madagascar", 172], ["gambia", 173], ["liberia", 174], ["equatorial guinea", 175], ["cape verde", 176], ["mauritius", 177], ["ethiopia", 178], ["gabon", 179], ["cameroon", 180], ["benin", 181], ["togo", 182], ["nauru", 183], ["palau", 184], ["new zealand", 185], ["australia", 186], ["solomon islands", 187], ["marshall islands", 188], ["papua new guinea", 189], ["vanuatu", 190], ["micronesia", 191], ["fiji", 192], ["samoa", 193], ["tuvalu", 194], ["kiribati", 195], ["tonga", 196]]);

function bfs(from, to) {
    var countryGraph = [[1], [0, 2], [1, 3, 4], [2, 4, 5, 6], [2, 3], [3, 6], [3, 5, 7], [6, 8], [7, 9], [8, 23], [11, 12], [10, 12, 14], [10, 11, 13, 14], [12], [11, 12], [17, 21, 18], [22], [15, 21, 19], [22, 15], [17, 21], [19, 24], [19, 17, 15], [16], [9, 26, 24, 27, 31], [20, 23, 27, 29], [28, 32, 34, 27, 33], [23, 31], [30, 29, 24, 23, 31, 32, 34, 25, 33], [31, 32, 25], [24, 27, 30], [29, 27], [23, 26, 27, 32, 28], [31, 27, 34, 25, 28], [25, 27], [25, 27, 32]];
    let Q = [countryMap.get(from)];
    let visited = new Set();
    let edges = -1;
    while (Q.length != 0) {
        // console.log(Q)
        edges += 1;
        let l = Q.length;
        for (let i = 0; i < l; i++) {
            let top = Q.shift();
            if (top == countryMap.get(to)) {
                return edges;
            }
            for (let country of countryGraph[top]) {
                country = parseInt(country);
                if (!visited.has(country)) {
                    Q.push(country);
                    visited.add(country);
                }
            }
        }
    }
}

// function minEdgeBFS(edges, u, v, n) {
//     // visited[n] for keeping track of visited
//     // node in BFS
//     let visited = [];

//     for (let i = 0; i < n; i++) {
//         visited.push(false);
//     }

//     // Initialize distances as 0
//     let distance = [];

//     for (let i = 0; i < n; i++) {
//         distance.push(0);
//     }

//     // queue to do BFS.
//     let Q = [];
//     distance[u] = 0;

//     Q.push(u);
//     visited[u] = true;
//     while (Q.length != 0) {
//         let x = Q.shift();
//         console.log(edges[x][0]);

//         for (let i = 0; i < edges[x].length; i++) {
//             if (visited[edges[x][i]])
//                 continue;

//             // update distance for i
//             distance[edges[x][i]] = distance[x] + 1;
//             Q.push(edges[x][i]);
//             visited[edges[x][i]] = true;
//         }
//     }
//     return distance[v];
// }