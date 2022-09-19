import { useState } from 'react'
import './styles.scss'

import { MdInfoOutline } from 'react-icons/md';

function Conversion() {

    const [bases, setBases] = useState({
        binary: '',
        octal: '',
        decimal: '',
        hexadecimal: ''
    })

    // const [result, setResult] = useState([])

    const convert = (string, base, toBase) => parseInt(string, base).toString(toBase).toUpperCase()

    return (
        <section id="convert">
            <div className="form">
                <label htmlFor="binary">
                    <span>Binary number
                        <MdInfoOutline title='Os números binários são números de base 2.'
                            // onClick={() => {
                            //     function b2d() {
                            //         let arr = bases.binary.split('')
                            //         arr = arr.map((num, index) => <>{num} × 2<sup key={index}>{arr.length-(index+1)}</sup></>)
    
                            //         // console.log(b2o);
    
                            //         for(let i = 1; i < arr.length; i+=2){
                            //             arr.splice(i, 0, " + ")
                            //         }
    
                            //         arr.push(` = ${bases.decimal}`)

                            //         return arr
                            //     }

                            //     setResult([
                            //         {
                            //             title: 'Binary ➜ Octal',
                            //             content: []
                            //         },
                            //         {
                            //             title: 'Binary ➜ Decimal',
                            //             content: [b2d()]
                            //         },
                            //         {
                            //             title: 'Binary ➜ Hexadecimal',
                            //             content: []
                            //         }
                            //     ])
                            // }}
                        />
                    </span>
                    <div>
                        <input id='binary'
                            value={bases.binary}
                            placeholder='Ex.: 100110'
                            onKeyDown={e => {

                                if (e.key === 'a' && e.ctrlKey) return

                                if (e.key === 'c' && e.ctrlKey) return

                                !['0', '1', 'Backspace', 'Delete', 'ArrowRight', 'ArrowLeft'].includes(e.key) && e.preventDefault()
                            }}
                            onChange={e => {
                                let value = e.target.value
                                setBases({
                                    binary: value,
                                    octal: value && convert(value, 2, 8),
                                    decimal: value && convert(value, 2, 10),
                                    hexadecimal: value && convert(value, 2, 16),
                                })
                            }}
                        />
                        <sub title='base'>2</sub>
                    </div>
                </label>

                <label htmlFor="octal">
                    <span>Octal number
                        <MdInfoOutline
                            // onClick={() => {
                            //     function o2d() {
                            //         let arr = bases.octal.split('')
                            //         arr = arr.map((num, index) => <>{num} × 8<sup key={index}>{arr.length-(index+1)}</sup></>)
    
                            //         for(let i = 1; i < arr.length; i+=2){
                            //             arr.splice(i, 0, " + ")
                            //         }
    
                            //         arr.push(` = ${bases.decimal}`)
    
                            //         return arr
                            //     }
                                

                            //     setResult([
                            //         {
                            //             title: 'Octal ➜ Binary',
                            //             content: []
                            //         },
                            //         {
                            //             title: 'Octal ➜ Decimal',
                            //             content: [o2d()]
                            //         },
                            //         {
                            //             title: 'Octal ➜ Hexadecimal',
                            //             content: []
                            //         }
                            //     ])
                            // }}
                        />
                    </span>
                    <div>
                        <input id='octal'
                            value={bases.octal}
                            placeholder='Ex.: 21312'
                            onKeyDown={e => {

                                if (e.key === 'c' && e.ctrlKey) return

                                !['0', '1', '2', '3', '4', '5', '6', '7', 'Backspace', 'Delete', 'ArrowRight', 'ArrowLeft'].includes(e.key) && e.preventDefault()
                            }}
                            onChange={e => {
                                let value = e.target.value
                                setBases({
                                    binary: value && convert(value, 8, 2),
                                    octal: value,
                                    decimal: value && convert(value, 8, 10),
                                    hexadecimal: value && convert(value, 8, 16),
                                })
                            }}
                        />
                        <sub title='base'>8</sub>
                    </div>
                </label>

                <label htmlFor="decimal">
                    <span>Decimal number <MdInfoOutline /></span>
                    <div>
                        <input id='decimal'
                            value={bases.decimal}
                            placeholder='Ex.: 9123'
                            onKeyDown={e => {

                                if (e.key === 'c' && e.ctrlKey) return

                                !['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete', 'ArrowRight', 'ArrowLeft'].includes(e.key) && e.preventDefault()
                            }}
                            onChange={e => {
                                let value = e.target.value
                                setBases({
                                    binary: value && convert(value, 10, 2),
                                    octal: value && convert(value, 10, 8),
                                    decimal: value,
                                    hexadecimal: value && convert(value, 10, 16),
                                })
                            }}
                        />
                        <sub title='base'>10</sub>
                    </div>
                </label>

                <label htmlFor="hexadecimal">
                    <span>Hex number
                        <MdInfoOutline
                            // onClick={() => {
                            //     function h2d() {
                            //         let s2n = {
                            //             A: 10,
                            //             B: 11,
                            //             C: 12,
                            //             D: 13,
                            //             E: 14,
                            //             F: 15
                            //         }
                            //         let arr = bases.hexadecimal.split('')
                            //         arr = arr.map((num, index) => <span style={{color: ''}}>{s2n[num] ? <>{s2n[num]}<sub style={{color: 'orange'}}>{num}</sub></> : num} × 16<sup key={index}>{arr.length-(index+1)}</sup></span>)
    
                            //         for(let i = 1; i < arr.length; i+=2){
                            //             arr.splice(i, 0, " + ")
                            //         }
    
                            //         arr.push(` = ${bases.decimal}`)
    
                            //         return arr
                            //     }
                                

                            //     setResult([
                            //         {
                            //             title: 'Octal ➜ Binary',
                            //             content: []
                            //         },
                            //         {
                            //             title: 'Octal ➜ Decimal',
                            //             content: [h2d()]
                            //         },
                            //         {
                            //             title: 'Octal ➜ Hexadecimal',
                            //             content: []
                            //         }
                            //     ])
                            // }}
                        />
                    </span>
                    <div>
                        <input id='hexadecimal'
                            value={bases.hexadecimal}
                            placeholder='Ex.: A7DF'
                            onKeyDown={e => {

                                if (e.key === 'c' && e.ctrlKey) return

                                !['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F', 'Backspace', 'Delete', 'ArrowRight', 'ArrowLeft'].includes(e.key) && e.preventDefault()
                            }}
                            onChange={e => {
                                let value = e.target.value
                                setBases({
                                    binary: value && convert(value, 16, 2),
                                    octal: value && convert(value, 16, 8),
                                    decimal: value && convert(value, 16, 10),
                                    hexadecimal: value.toUpperCase(),
                                })
                            }}
                        />
                        <sub title='base'>16</sub>
                    </div>
                </label>
            </div>

            <div className="content">
                {/* {result.map((res, index) => <div key={index}>
                    <h2>{res.title}</h2>
                    <p>{res.content.map((cont => (
                        <>
                            {cont}
                        </>
                    )))}</p>
                </div>)} */}
            </div>

        </section>
    )
}

export default Conversion