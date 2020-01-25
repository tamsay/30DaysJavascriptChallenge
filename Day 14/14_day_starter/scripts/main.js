console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const throwErroExampleFun = () => {
    let y = prompt('Enter a number: ')
    try {
      if (y == '') throw 'empty'
      if (isNaN(y)) throw 'not a number';
       y = Number(y);
      if (y < 5) throw 'too low';
      if (y > 10) throw 'too high';
    } catch (err) {
      console.log(err)
      console.group('error handling')
      console.log(err.name)
      console.log(err.message)
      console.log(err)
      console.groupEnd('error handling')
    }
    finally{
        console.warn('Yana aiki');
    }
  }
  throwErroExampleFun();

  // let lastName = 'Yetayeh'; 
  // let fullName = fistName  + ' ' + lastName;
try {
    let lastName = 'Yetayeh'; 
    let fullName = fistName  + ' ' + lastName;
  } catch (err) {
    console.log(err)
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }
