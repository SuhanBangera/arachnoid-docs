export const getCommand = (packageManager:'npm'|'yarn'):string=>{
        if (packageManager === 'npm') {
            return 'npm install arachnoid'
        } 

        return 'yarn add arachnoid';
    }