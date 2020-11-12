import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('test in the hook useFetchGifts', () => {
    test('should return initial state',async ()=>{

        const { result, waitForNextUpdate }=renderHook(()=>useFetchGifs('chavo'));
        const {data, loading}=result.current;

        await waitForNextUpdate();

        expect(data.length).toBe(0);
        expect(loading).toBe(true);

    });


    test('should return an image array', async ()=>{
        const { result, waitForNextUpdate }=renderHook(()=>useFetchGifs('chavo'));
        
        //wait the changes in the state of the custom hook
        await waitForNextUpdate();
        const {data, loading}=result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })

})