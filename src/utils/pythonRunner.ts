import { PythonShell } from 'python-shell';

export const runPythonScript = async (scriptPath: string, args: string[] = []): Promise<string[]> => {
  const options = {
    mode: 'text',
    pythonPath: 'python3',
    pythonOptions: ['-u'], // unbuffered output
    scriptPath: './python_scripts',
    args: args
  };

  return new Promise((resolve, reject) => {
    PythonShell.run(scriptPath, options)
      .then(results => {
        resolve(results);
      })
      .catch(error => {
        console.error('Error running Python script:', error);
        reject(error);
      });
  });
};