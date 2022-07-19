import { render, screen } from "@testing-library/react";
import { string } from "prop-types";
import { GifItem } from "../../components";

describe('Pruebas en GifItem', () => { 
    const title = 'title test string';
    const url = 'https://www.testurl/testurl';
    const {container} = render( <GifItem title={title} url={url} /> );

    test('should match with the snapshot', () => {

       
       expect(container).toMatchSnapshot()


     });

     test('should title be a string', () => { 

        expect(typeof title).toBe('string')


      })
      test('should URL be contained in the snapshot', () => { 

        render( <GifItem title={title} url={url} /> );

        expect(screen.getByRole('img').src).toBe(url)
        

        

      })
      test('should img alt title equal to title', () => { 

        render( <GifItem title={title} url={url} /> );

        expect(screen.getByRole('img').alt).toBe(title)

       })


 });