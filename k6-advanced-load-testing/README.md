
# Advanced k6 Load Testing Project

This project implements advanced load testing scenarios using **k6**, leveraging modern design patterns for scalability and reusability.

## Features
- **Strategy Pattern**: Manage multiple test scenarios (e.g., load, stress).
- **Factory Pattern**: Dynamically generate test data.
- **Singleton Pattern**: Centralized configuration management.
- **Data-Driven Testing**: Use external data sources for dynamic tests.

## Project Structure
```
k6-advanced-load-testing/
├── scripts/      # Load testing scenarios
├── config/       # Environment-specific configurations
├── data/         # External data files (CSV/JSON)
├── utils/        # Reusable utility functions
├── results/      # Test result files
├── dashboard/    # Monitoring and dashboard files
└── README.md     # Documentation
```

## Results and Reporters
k6 provides various ways to generate and visualize results. This project integrates multiple output formats to make results easy to analyze.

### Output Formats
1. **Console Output**:
   Default output in the terminal, providing metrics such as:
   - `http_req_duration`: Response time distribution.
   - `http_req_failed`: Percentage of failed requests.

   Example:
   ```
   checks.....................: 100.00% ✓ 20000 ✗ 0  
   http_req_duration..........: avg=250ms min=200ms med=240ms max=500ms p(95)=400ms
   http_req_failed............: 0.00%   ✓ 0     ✗ 20000
   ```

2. **JSON Output**:
   Use the `--out` option to export results to a JSON file for detailed analysis:
   ```bash
   k6 run --out json=results/results.json scripts/load_scenario.js
   ```

3. **HTML Report**:
   Generate a detailed HTML report using an external tool like `k6-summary`:
   ```bash
   k6 run --summary-export=results/summary.json scripts/load_scenario.js
   k6-summary -o results/report.html results/summary.json
   ```

4. **Prometheus & Grafana**:
   Export metrics to Prometheus and visualize them in Grafana dashboards:
   - Install Prometheus and Grafana.
   - Add the k6 Prometheus output extension:
     ```bash
     k6 run --out prometheus scripts/load_scenario.js
     ```

### Results Folder
- **Purpose**: Store test results for later analysis.
- **Contents**:
  - `results.json`: Raw JSON metrics.
  - `report.html`: Human-readable HTML report.

## Getting Started
1. Install **k6**: `brew install k6` or follow [k6 installation guide](https://k6.io/docs/getting-started/installation/).
2. Clone the repository: `git clone <repo-url>`.
3. Run a test scenario:
   - Load Test: `k6 run scripts/load_scenario.js`

## Extending the Project
- Add test data in the `data/` folder.
- Create new scenarios by extending the Strategy Pattern in `scripts/`.
- Update `config/env.js` for environment-specific settings.

## Dashboard Integration
This project supports monitoring through Prometheus and Grafana.
1. **Prometheus**: Use the Prometheus output format to collect metrics.
2. **Grafana**: Import the k6 Prometheus dashboard template to visualize real-time metrics.

## License
This project is licensed under the MIT License.
