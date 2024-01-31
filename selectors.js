const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seededFruitEls = document.getElementsByClassName('seed');
    console.log(seededFruitEls);
    
    // 2. Get all seedless fruit elements
    // Your code here
    const seedlessFruitEls = document.getElementsByClassName('seedless');
    console.log(seedlessFruitEls);

    // 3. Get first seedless fruit element
    // Your code here
    const firstSeededFruitEl = seededFruitEls[0];
    console.log(firstSeededFruitEl);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const youSpan = document.querySelector('span').innerText;
    console.log(youSpan);

    // 5. Get all children of element "wrapper"
    // Your code here
    const allWrapperEls = document.getElementById('wrapper').children;
    console.log(allWrapperEls);

    // 6. Get all odd number list items in the list
    // Your code here
    const oddEls = document.querySelectorAll('li.odd');
    console.log(oddEls);

    // 7. Get all even number list items in the list
    // Your code here
    const evenEls = document.querySelectorAll('ol li:not(.odd)');
    console.log(evenEls);

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const noClassTechEls = document.querySelector('#three p a');
    console.log(noClassTechEls);

    // 9. Get "Amazon" list element
    // Your code here
    const amazonEl = document.querySelectorAll('#three p a.shopping');
    console.log(amazonEl);

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicornEls = document.getElementsByClassName('unicorn');
    let newList = [];
    for(el of unicornEls) {
        newList.push(el.parentElement);
    }
    console.log(newList);
}

window.onload = select;