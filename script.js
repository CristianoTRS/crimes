$(() => {

    const startChildren = $('.crimes-list').children();

    const getCrimes = (value) => {
        const crimesList = startChildren;
        let finalArray = [];
        for (let i = 0; i < crimesList.length; i++) {
            const text = $(crimesList[i])[0].innerText;
            if (text.toLowerCase().includes(value.toLowerCase())) {
                finalArray.push($(crimesList[i])[0].outerHTML);
            }
        }
        return finalArray;
    }

    const searchChanged = async () => {
        const value = $('.search-crime').val();
        const crimes = await getCrimes(value);
        if (crimes.length == 0) $('.crimes tbody').empty();
        $('.crimes tbody').empty();
        for (let i = 0; i < crimes.length; i++) {
            console.log(crimes[i])
            $('.crimes-list').append(crimes[i]);
        }
    }

    document.addEventListener('change', searchChanged)

})