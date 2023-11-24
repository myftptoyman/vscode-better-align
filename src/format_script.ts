import { ChildProcess, spawnSync } from 'child_process';
// import { notStrictEqual } from 'assert';
import { join } from 'path';
// import { EOL } from 'os';
export class FormatScript {
    private formatter: ChildProcess;
    data: string[] = [];
    err: string;

    format(fileContent: string): string[] {
        let scriptPath = join(__dirname, "../verilogutil/verilog_beautifier.py");
        // let scriptPath = '"'+ __dirname + '../verilogutil/verilog_beautifier.py"';
        // let lines : string [];

        // Setup stdout events and parsing
        let promise = spawnSync('python3', [scriptPath], { input : fileContent});

        // Setup the python process
        // this.formatter = promise.childProcess;
        // this.formatter.stdout.on('data', (data) =>
        //    {
        //     let line = data.toString();
        //     this.data.push(line);
        //    }
        // );
        // this.formatter.stderr.on('data', (data) => this.err = data.toString());

        // Send the text for formatting
        // this.formatter.stdin.write(fileContent);
        // this.formatter.stdin.end();

        this.data.push(promise.stdout.toString());
        return this.data;
    }
}
