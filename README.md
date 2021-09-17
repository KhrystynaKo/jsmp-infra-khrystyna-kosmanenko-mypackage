# **Create array with section objects from array with strings**

Purpose this library is creating array with section objects which contains name with letter and data with array of strings started from current letter. It will help if you have an array with strings, but you want to create section list from it.

**Installation**

Open a Terminal in the project root and run:

`npm i jsmp-infra-khrystyna-kosmanenko-mypackage`

**Usage**

`import { createSectionList } from 'jsmp-infra-khrystyna-kosmanenko-mypackage';`

`createSectionList(['Anna', 'Loren', 'Katy', 'Anabel', 'Leo']); `

`// [{ name: 'A', data: ['Anabel', 'Anna'] }, { name: 'K', data: ['Katy'] }, { name: 'L', data: ['Leo', 'Loren'] }];`
